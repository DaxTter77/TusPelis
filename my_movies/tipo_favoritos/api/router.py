from rest_framework.routers import DefaultRouter
from tipo_favoritos.api.views import TipoFavoritoApiViewSet

router_tipos = DefaultRouter()
router_tipos.register('tipos_favoritos', TipoFavoritoApiViewSet, basename='tipos')