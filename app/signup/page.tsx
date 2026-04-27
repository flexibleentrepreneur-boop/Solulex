// Similar structure as login, but:
const handleSignup = async () => {
  const { error } = await supabase.auth.signUp({
    email,
    options: { emailRedirectTo: `${window.location.origin}/dashboard` }
  });
  if (error) alert(error.message);
  else alert('Check your email to confirm signup!');
};
