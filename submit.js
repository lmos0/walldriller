chrome.action.onClicked.addListener((tab) => {
    const url = tab.url;  
    
  
    const submitUrl = "https://archive.ph/submit/";
    const params = new URLSearchParams();
    params.append('submitid', 'Fr2bMVgfJXPIPwUwe7mU1OxEqymf2gK9Jb6/0YJC60eYGakB6Mmf4l1QiN5nsT+f');
    params.append('url', url);
  
   
    const fullUrl = submitUrl + '?' + params.toString();
    chrome.tabs.create({ url: fullUrl });
  
   
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icon.png',
      title: 'URL Enviada!',
      message: 'A URL foi enviada para o Archive.ph para arquivamento.'
    });
  });
  