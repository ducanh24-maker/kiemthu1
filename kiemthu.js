function addProduct() {
    const name = document.getElementById('name').value.trim();
    const price = document.getElementById('price').value.trim();
    const origin = document.getElementById('origin').value.trim();
    const cpu = document.getElementById('cpu').value.trim();
    const ram = document.getElementById('ram').value.trim();
    const storage = document.getElementById('storage').value.trim();
    const type = document.getElementById('type').value.trim();
    const screenSize = document.getElementById('screenSize').value.trim();
    const battery = document.getElementById('battery').value.trim();
    const message = document.getElementById('message');
    message.style.color = 'red';

    if (!name) { message.innerText = 'Vui lòng nhập tên sản phẩm!'; return; }
    if (name.length > 100) { message.innerText = 'Tên sản phẩm quá dài'; return; }
    if (!price || isNaN(price.replace(/[,\.]/g, '')) || parseFloat(price.replace(/[,\.]/g, '')) <= 0) { message.innerText = 'Đơn giá không hợp lệ'; return; }
    if (!origin || origin.length > 100 || /[^a-zA-Z ]/.test(origin)) { message.innerText = 'Xuất xứ không hợp lệ'; return; }
    if (!cpu || cpu.length > 100 || /[^a-zA-Z0-9 ]/.test(cpu)) { message.innerText = 'CPU không hợp lệ'; return; }
    if (!ram || !/^[0-9]+ ?GB$/.test(ram) || parseInt(ram) <= 0) { message.innerText = 'RAM không hợp lệ'; return; }
    if (!storage || !/^[0-9]+ ?(GB|TB)$/.test(storage) || parseInt(storage) <= 0) { message.innerText = 'Dung lượng không hợp lệ'; return; }
    if (type.toLowerCase() !== 'smartphone') { message.innerText = 'Loại sản phẩm không hợp lệ'; return; }
    if (!screenSize || !/^[0-9]+(\.[0-9]+)? inch$/.test(screenSize)) { message.innerText = 'Kích thước màn hình không hợp lệ'; return; }
    if (!battery || isNaN(battery) || parseInt(battery) <= 0) { message.innerText = 'Dung lượng PIN không hợp lệ'; return; }

    message.style.color = 'green';
    message.innerText = 'Thêm mới sản phẩm thành công';
    document.getElementById('productForm').reset();
}