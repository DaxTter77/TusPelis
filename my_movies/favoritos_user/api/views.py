from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from favoritos_user.models import FavoritosUser
from favoritos_user.api.serializers import FavoritosUserSerializer
#Se añaden los permisos
from favoritos_user.api.permissions import IsAdminReadOnly

class FavoritosUserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminReadOnly, IsAuthenticated]
    serializer_class = FavoritosUserSerializer
    queryset = FavoritosUser.objects.all()
