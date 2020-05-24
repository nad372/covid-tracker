from jsonrpcclient import request
from jsonrpcclient.clients.http_client import HTTPClient
from jsonrpcclient.requests import Request
import pandas as pd
import datetime
import numpy as np
import requests
import openpyxl
#from registration.models import Bookings
import json

import csv
COMPANY_LOGIN = 'nimrc19'
API_KEY = '8a515dee21e9913360e6c7d60bbfe9cc0e4a3adf4a0ed57d4d932178d95bb0a8'
USER_LOGIN = 'admin'
USER_PASSWORD = 'Sakina16'
DAYS_AHEAD = 4
DAYS_BEHIND = 2


class APIError(Exception):
    pass


def get_token(login, api_key):
    """
    Returns the token as per https://simplybook.me/en/api/developer-api/tab/guide_api
    """
    token = request('https://user-api.simplybook.me/login/',
                    'getToken', login, api_key)
    return token.data.result


def get_user_token(company_login, user_login, user_password):
    """
    Returns an authentication for a certain user, needed to create the admin client
    """
    token = request('https://user-api.simplybook.me/login/',
                    'getUserToken', company_login, user_login, user_password)
    return token.data.result


def get_client(login, token):
    """
    Returns JSON RPC client
    """
    client = HTTPClient('https://user-api.simplybook.me')
    client.session.headers.update({'X-Company-Login': login, 'X-Token': token})
    return client


def get_admin_client(login, token):
    """
    Returns JSON RPC client for the admin interface
    """
    admin_client = HTTPClient('https://user-api.simplybook.me/admin/')
    admin_client.session.headers.update(
        {'X-Company-Login': login, 'X-User-Token': token})
    return admin_client


def make_bookings_csv_df(bookings, admin_client):
    with open('bookings.csv', mode='w') as csvfile:
        person = csv.writer(csvfile, delimiter=',')
        for key in bookings:
            print(key)
            print(key['record_date'])

            #a=Bookings()
            #a = Bookings(key['id'], key['record_date'], key['unit_id]', key['client'],key['client_email'], key['unit'],key['event'],key['code]', key['starts_date'])
            #a.save()



def make_bookings_df(bookings, admin_client):
    """
    Sets up and formats the pandas data frame of bookings.
    Needs admin_client because we need to fetch additional details for each booking
    """
    print(bookings)
    # Creates dataframe and sets up date and time lists
    df = pd.DataFrame(bookings)
    df = df.astype({"record_date": np.datetime64,
                    "start_date": np.datetime64, "end_date": np.datetime64})
    df.sort_values(by=['start_date', 'client'], inplace=True)
    df['date'] = df['start_date'].dt.date
    df['time'] = df['start_date'].dt.time

    # Select only those tests in the next DAYS_AHEAD days (including today)
    df = df[df['date'] <= (datetime.datetime.today() +
                           datetime.timedelta(days=DAYS_AHEAD)).date()]
    df = df[df['date'] >= (datetime.datetime.today() -
                           datetime.timedelta(days=DAYS_BEHIND)).date()]

    # Add additional details to each booking
    df['first_name'] = 'NA'
    df['middle_name'] = 'NA'
    df['last_name'] = 'NA'
    df['form_phone'] = 'NA'
    df['passport'] = 'NA'
    df['drivers_license'] = 'NA'
    for index, row in df.iterrows():
        b_id = row['id']
        additional_fields = admin_client.getBookingDetails(
            b_id).data.result['additional_fields']
        for field in additional_fields:
            if field['field_title'] == 'Jina la kwanza':
                df.at[index, 'first_name'] = field['value']
            elif field['field_title'] == 'Jina la kati':
                df.at[index, 'middle_name'] = field['value']
            elif field['field_title'] == 'Jina la mwisho':
                df.at[index, 'last_name'] = field['value']
            elif field['field_title'] == 'Namba ya simu':
                df.at[index, 'form_phone'] = field['value']
            elif field['field_title'] == 'Namba ya pasipoti':
                df.at[index, 'passport'] = field['value']
            elif field['field_title'] == 'Namba ya leseni':
                df.at[index, 'drivers_license'] = field['value']
    return df


def make_excel_files_from_bookings(df):
    """
    Makes one excel sheet per date, with a list of bookings on that date in each sheet. Bookings sorted by time and then surname.
    Params:
        bookings: 
            Provided as a list of dicts, each element a booking
            So that it can be easily pandas-ified
    """
    with pd.ExcelWriter('bookings.xlsx', date_format='YYYY-MM-DD', datetime_format='YYYY-MM-DD HH:MM:SS') as writer:
        # We assume that unneeded dates have already been filtered out from the dataframe
        #print(df)
        dates = df['start_date'].dt.date.unique()
        for date in dates:
            #print(df[df['start_date'].dt.date == date])
            df_date = df[df['start_date'].dt.date == date]
            df_date.to_excel(writer,
                             sheet_name=date.strftime(format='%Y-%m-%d'),
                             columns=['time', 'first_name', 'middle_name', 'last_name',
                                      'form_phone', 'passport', 'drivers_license'],
                             header=['Time', 'First Name', 'Middle Name', 'Last Name', 'Phone Number', 'Passport No', 'Drivers License'])


def csv_reader():
    with open('bookings.csv', newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter= ' ')
        for row in reader:
            print(row)

def csv_maker(df):
    with open('bookings.csv', newline='') as csvfile:
        writer = csv.writer(csvfile, delimiter='')
        writer.writerow([''])


if __name__ == '__main__':
    admin_token = get_user_token(COMPANY_LOGIN, USER_LOGIN, USER_PASSWORD)
    admin_client = get_admin_client(COMPANY_LOGIN, admin_token)
    all_bookings = admin_client.getBookings([]).data.result
    #df = make_bookings_df(all_bookings, admin_client)
    #make_excel_files_from_bookings(df)
    make_bookings_csv_df(all_bookings, admin_client)
    exit = input("Complete, press enter to exit... ")
