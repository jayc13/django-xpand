from django.contrib import admin

from .models import Empresa, Producto, Domicilio, Cliente, Venta

admin.site.register(Empresa)
admin.site.register(Producto)
admin.site.register(Domicilio)
admin.site.register(Cliente)
admin.site.register(Venta)
    