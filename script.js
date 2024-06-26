const search = document.querySelector('.search-box button');

search.addEventListener('click', () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjdkODk0M2VlLWU1MDctNGU3NS1iNDQxLWJiYTgzZWM4ZjExMiIsImlhdCI6MTcxOTQyNjkzNywic3ViIjoiZGV2ZWxvcGVyLzc5ZTUyZjlmLWJkZjUtNjVkMS1mODVlLTE3NzFmOGRkNjQxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNjUuMjI1LjYwLjIzOCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.oRVdVh11Zyn-E4bLT3-KaOV1ubeIeMMqhUbgOy9J6SG13O_tsWumCaSYkaPAJgE0Ozma74xwGNZjBU6ikPoHJA';
    const plrTag = document.querySelector('.search-box input').value;
    const requestOptions = {
        method: 'GET',
        headers:{
            'Authorization': `Bearer %s ${token}`,
        },
    };
    //if(plrTag == '')return;
    fetch(`https://api.clashroyale.com/v1/players/%23Y2JYJ20GQ`, requestOptions).then(response => response.json()).then(json => {
        if(response.ok){
            print("OK");
        }
        
        if(json.cod == '404'){
            //error
            print("Not ok");
            return;
        }
        const plrName = document.querySelector('.player-name');
        plrName.innerHTML = `${json.name}`;

    })
})