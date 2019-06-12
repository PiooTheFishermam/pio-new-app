import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const permission = false // zmienna obsługująca uprawnienia do logowania, w tej sytuacji użytkownik nie może wejść do panelu administratora. Tą zmienną SYMULUJEMY uwierzytelnianie użytkownika

const AdminPage = () => {
    return (
        <Route render={() => {
            return (
                permission ? (<h3>Panel admina DZIEŃ DOBRY</h3>) : (<Redirect to="/login" />)

                // Jeśli permission jest true to wyświetl to pierwsze, jeśli jest false to PRZEKIERUJE DO INNY URL - w tym wypadki na url "/login" - czyli nieobsługiwany czyli przekiruje do ErrorPage.js
                // Redirect przekierowuje do innego url, w tym wypadku sprawdzamy czy użytkownik ma permission na true, jeśli ma false to przekierujemy go do LoginPage

            )
        }} />
    );
}

export default AdminPage;