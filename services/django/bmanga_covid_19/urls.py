from django.urls import path, include

urlpatterns = [
    path('/', include('security_conv.urls')),
    path('/', include('supplying.urls')),
    path('/', include('traffic.urls')),
    path('/', include('water.urls')),
    path('', include('frontend.urls')),
]
