const customersLogin = async () => {
    try {
        const response = await fetch('https://nextjs-cour-78109-default-rtdb.asia-southeast1.firebasedatabase.app/customers.json');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch customers');
    }
}

export default customersLogin;