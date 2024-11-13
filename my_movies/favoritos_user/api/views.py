from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from favoritos_user.models import FavoritosUser
from favoritos_user.api.serializers import FavoritosUserSerializer
#Se añaden los permisos
from favoritos_user.api.permissions import IsAdminReadOnly

class FavoritosUserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminReadOnly, IsAuthenticated]
    serializer_class = FavoritosUserSerializer
    queryset = FavoritosUser.objects.all()
    
    @action(detail=False, methods=['get'], url_path="search/(?P<id_user>[0-9]+)")
    def by_user(self, request, pk_int=None, id_user=None):
        if id_user is not None:
            data = FavoritosUser.objects.filter(id_user=id_user)
            serializer = FavoritosUserSerializer(data, many=True)
            return Response(serializer.data)
        return Response({'error': 'id user no existe o no es válido'}, status=400)


