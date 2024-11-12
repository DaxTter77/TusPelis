import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllFavoritosUser, createFavoritoUser, getFavoritoUser, updateFavoritoUser, deleteFavoritoUser} from '../api/favoritosUser.api';

export function FavoritoUserForm(){
    return (
        <div className="container">Formulario Favoritos Por Usuario</div>
    )
}