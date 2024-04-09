const renderUsers = async () => {
    const userInfoContainer = document.querySelector('.userInfo');
    try {
        const users = await getUsers();
        users.data.forEach(user => {
            const userCard = document.createElement('div');
            // userCard.classList.add('col-lg-4');
            userCard.classList.add('swiper-slide');
            userCard.innerHTML = `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">Id: ${user.id}</h5>
                        <p class="card-text">Name: ${user.name}</p>
                        <button class="btn btn-primary">Contact No: ${user.phone}</button>
                    </div>
                </div>
            `;
            userInfoContainer.appendChild(userCard);
        });
    } catch (error) {
        console.error('Error while rendering users:', error);
    }
}
renderUsers();