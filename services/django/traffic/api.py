from traffic.models import Metrolinea, Subpoena, Accidents, Injuries, Deaths
from rest_framework import viewsets, permissions
from .serializers import MetrolineaSerializer, SubpoenaSerializer, AccidentsSerializer, InjuriesSerializer, DeathsSerializer

# Metrolinea Viewset
class MetrolineaViewset(viewsets.ModelViewSet):
    queryset = Metrolinea.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MetrolineaSerializer

# Subpoena Viewset
class SubpoenaViewset(viewsets.ModelViewSet):
    queryset = Subpoena.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SubpoenaSerializer

# Accidents Viewset
class AccidentsViewset(viewsets.ModelViewSet):
    queryset = Accidents.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AccidentsSerializer

# Injuries Viewset
class InjuriesViewset(viewsets.ModelViewSet):
    queryset = Injuries.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InjuriesSerializer

# Deaths Viewset
class DeathsViewset(viewsets.ModelViewSet):
    queryset = Deaths.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DeathsSerializer