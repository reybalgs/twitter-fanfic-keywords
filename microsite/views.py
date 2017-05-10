# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from rest_framework import viewsets

from models import Keyword
from serializers import KeywordSerializer

# Create your views here.

class KeywordViewSet(viewsets.ModelViewSet):
    """
    Viewset for keywords.
    """
    queryset = Keyword.objects.all()
    serializer_class = KeywordSerializer

def index(request):
    template = loader.get_template('microsite/index.html')
    return HttpResponse(template.render())
