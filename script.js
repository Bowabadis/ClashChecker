const search = document.querySelector('.search-box button');

search.addEventListener('click', () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijc4MjAwMmM4LTRmOTgtNDY0NC1iYjU5LWM4YWFhZjk4NDQ3MiIsImlhdCI6MTcxOTUwNDE5Niwic3ViIjoiZGV2ZWxvcGVyLzc5ZTUyZjlmLWJkZjUtNjVkMS1mODVlLTE3NzFmOGRkNjQxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODUuMTk5LjEwOC4xNTMiLCIxODUuMTk5LjEwOS4xNTMiLCIxODUuMTk5LjExMC4xNTMiLCIxODUuMTk5LjExMS4xNTMiLCIxNjUuMjI1LjYxLjUyIl0sInR5cGUiOiJjbGllbnQifV19.mO00arw-8y5PmPWMEkdW8_2XPEfMsGoUjNYLTbCMjVXJVlB-7B3QbDsZqDg6PWA84BKa0R-ofRLexov5Gk0gug';
    const plrTag = document.querySelector('.search-box input').value;
    const apiUrl = `https://api.clashroyale.com/v1/players/%23Y2JYJ20GQ`
    const requestOptions = {
        method: 'GET',
        headers:{
            'Authorization': `Bearer ${token}`,
        },
    };
    //if(plrTag == '')return;
    fetch(apiUrl, requestOptions).then(response => response.json()).then(json => {
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
