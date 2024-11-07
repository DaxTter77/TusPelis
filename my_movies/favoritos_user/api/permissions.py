from rest_framework.permissions import BasePermission, SAFE_METHODS
#SAFE_METHODS son los metodos get, post and head

class IsAdminReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        else:
            return obj.id_user.id == request.user.id