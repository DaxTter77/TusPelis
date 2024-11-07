from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny

from users.models import User
from users.api.serializers import UserResgisterSerializer, UserSerializer, UserUpdateSerializer

class RegisterView(APIView):
    
    def post(self, request):
        #print("Regsitro de usuario")
        #return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = UserResgisterSerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
#Clase para manejar información de usuarios solo para loggeados
class UserView(APIView):
    permission_classes = [IsAuthenticated]
    
    #Obtener los usuarios creados
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
    
    #Sobreescribe el usuario
    def put(self, request):
        user = User.objects.get(id=request.user.id)
        serializer = UserUpdateSerializer(user, data=request.data)
        if(serializer.is_valid(raise_exception = True)):
            serializer.save()
            return Response(serializer.data)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)


