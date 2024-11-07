from rest_framework.routers import DefaultRouter
from favoritos_user.api.views import FavoritosUserApiViewSet

router_favoritos_user = DefaultRouter()
router_favoritos_user.register('favoritos_user', FavoritosUserApiViewSet, basename='favoritos_user')