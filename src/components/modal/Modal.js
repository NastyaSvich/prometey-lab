export const openModal = (modalOverlay) => {
    console.log(123);
    modalOverlay.classList.add('open');
};

export const closeModal = (modalOverlay) => {
    modalOverlay.classList.remove('open');
};
