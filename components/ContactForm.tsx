async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    
    alert('Message sent!');
  }
