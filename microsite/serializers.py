from rest_framework import serializers
from microsite.models import Keyword, Category

# Serializers for the models displayed in the API goes here
class KeywordSerializer(serializers.ModelSerializer):
    """
    Serializer for keywords.
    """
    class Meta:
        model = Keyword
        fields = ('id', 'word', 'category')
