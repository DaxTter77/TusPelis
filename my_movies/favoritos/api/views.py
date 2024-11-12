from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from favoritos.models import Favorito
from favoritos.api.serializers import FavoritosSerializer
#Se añaden los permisos
from favoritos.api.permissions import IsAdminReadOnly

class FavoritoApiViewSet(ModelViewSet):
    permission_classes = [IsAdminReadOnly, IsAuthenticated]
    serializer_class = FavoritosSerializer
    queryset = Favorito.objects.all()
