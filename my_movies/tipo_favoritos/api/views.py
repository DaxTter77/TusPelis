from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from tipo_favoritos.models import TipoFavorito
from tipo_favoritos.api.serializers import TipoFavoritosSerializer
#Se añaden los permisos
from tipo_favoritos.api.permissions import IsAdminReadOnly


class TipoFavoritoApiViewSet(ModelViewSet):
    permission_classes = [IsAdminReadOnly, IsAuthenticated]
    serializer_class = TipoFavoritosSerializer
    queryset = TipoFavorito.objects.all()
