window.onload=function(){
    console.log("AI Filler running..");
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    (async function() {
    
    
        var ar = [
            "clustername",
            "infratype",
            "subscriberbase",
            "neonversion",
            "region",
            "zone",
            "subnet_id",
            "domainname",
            "instancetype",
            "number_of_instances",
            "product_type",
            "root_size",
            "ftp_size",
            "ftparchive_size",
            "gfs_size",
            "dfs_size",
            "elastic_size",
            "mail_host",
            "mail_port",
            "mail_user",
            "mail_password",
            "mail_from",
            "mail_to"];
    
        var ar2 = ["testcluster",
            "PRODUCTION",
            "2",
            "6.1.1-GA",
            "ap-south-1",
            "ap-south-1a",
            "subnet-d2315aba",
            "test_domain",
            "m4.4xlarge",
            "1",
            "Enterprise",
            "200",
            "50",
            "50",
            "50",
            "50",
            "50",
            "122.122.122.122",
            "1234",
            "adilsaju@gmail.com",
            "adilsaju",
            "adilsaju@gmail.com",
            "adil.saju@flytxt.com"
        ];
        for (var i = 0; i < 23; i++) {
            
            if(document.querySelector(`#${ar[i]}`).tagName=="SELECT")
            {
                await sleep(2000);
            }
             document.querySelector(`#${ar[i]}`).value = `${ar2[i]}`;
            var event = new Event('change');
            document.querySelector(`#${ar[i]}`).dispatchEvent(event);
    
        }
    
    
    })();
}