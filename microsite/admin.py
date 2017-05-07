# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from microsite.models import Keyword, Category

# Register your models here.

admin.site.register(Keyword)
admin.site.register(Category)
