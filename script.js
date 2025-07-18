const iconFiles = [
    'user1.jpg'
    // 必要に応じて追加
];

const iconContainer = document.getElementById('icon-container');

// ローカルストレージから状態を取得
let metList = JSON.parse(localStorage.getItem('metList') || '{}');

iconFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `icons/${file}`;
    img.alt = file;
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.borderRadius = '50%';
    img.style.objectFit = 'cover';
    img.style.boxShadow = metList[file]
        ? '0 0 0 4px #4caf50, 0 2px 8px rgba(0,0,0,0.1)'
        : '0 2px 8px rgba(0,0,0,0.1)';
    img.style.cursor = 'pointer';

    // クリックで状態を切り替え
    img.addEventListener('click', () => {
        metList[file] = !metList[file];
        localStorage.setItem('metList', JSON.stringify(metList));
        img.style.boxShadow = metList[file]
            ? '0 0 0 4px #4caf50, 0 2px 8px rgba(0,0,0,0.1)'
            : '0 2px 8px rgba(0,0,0,0.1)';
    });

    iconContainer.appendChild(img);
});