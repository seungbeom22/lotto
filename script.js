let historyList = []; // 기록을 담을 바구니

function generateLotto() {
    // ... 번호 뽑는 기존 로직 ...
    
    // 기록 배열에 추가
    historyList.push(numbers); 
    
    // 화면에 기록 그리기
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '<h3>📜 추첨 기록</h3>';
    
    // 최신 기록부터 보여주기 위해 역순으로 출력
    historyList.slice().reverse().forEach(record => {
        const div = document.createElement('div');
        div.innerText = record.join(', ');
        historyDiv.appendChild(div);
    });
}
