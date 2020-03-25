from rest_framework import serializers
from security_conv.models import Security, Coexistence

# Security Serializer
class SecuritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Security
        fields = '__all__'
        read_only_fields = ['id']

# Coexistence Serializer
class CoexistenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coexistence
        fields = '__all__'
        read_only_fields = ['id']