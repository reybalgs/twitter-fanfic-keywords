# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Category(models.Model):
    """
    Category of a keyword.
    """
    name = models.CharField(null=True, max_length=30)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'

class Keyword(models.Model):
    """
    A keyword to be used for generation.
    """
    word = models.CharField(null=True, max_length=30)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.category.name + ':' + self.word
