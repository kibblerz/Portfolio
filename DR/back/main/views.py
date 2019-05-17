from django.shortcuts import render
from django.http import HttpResponse, response, request
import json, smtplib,ssl
from django.template import loader
import logging
# Create your views here.
def index(request, url):
    template =  loader.get_template('index.html')
    return render(request, 'index.html', {'url': url})

def contact(request):
    request.content_type = 'JSON'
    content = json.loads(request.body.decode('utf-8'))
    password = "DumbyPassword"
    emailA = "DumbyEmail"
    email = content['email']
    message = content['message']

    
    with smtplib.SMTP_SSL("smtp.gmail.com:465") as server:
        server.login(emailA, password)
        server.sendmail(email, emailA"swd1druss@gmail.com",('Subject: {}\n\n{}'.format(("Request for Service from " + email), (message))) )
    return HttpResponse('Success')
