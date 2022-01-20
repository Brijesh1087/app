function send_email(){
	let from = document.getElementById('from').value;
	let to = document.getElementById('to').value;
	let subject = document.getElementById('subject').value;
	let body = document.getElementById('body').value;


	if((from.includes("@") && from.includes('.') &&
	 from.length >= 12) && (to.includes("@") && 
	 to.includes('.') && to.length >= 12) &&  
	 (subject.length >= 4) && (body.length >= 5) )
	 {

		console.log(from,to,subject,body)

		 Email.send({
			   SecureToken:'fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f',
			   To:to,
			   From:from,
			   Subject:subject,
			   Body:body
			 }).then(data=>{
			 	alert(data='OK')
			 })

	}else{
		document.getElementById('alert').style.display='block';
	}
}
