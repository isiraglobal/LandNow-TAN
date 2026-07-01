module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name, email, phone, location, experience,
    company, investmentRange, referral, message
  } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL not set');
    return res.json({ success: true });
  }

  const embed = {
    embeds: [{
      title: 'New Membership Application',
      color: 0xb5925a,
      fields: [
        { name: 'Name', value: name, inline: true },
        { name: 'Email', value: email, inline: true },
        { name: 'Phone', value: phone || '—', inline: true },
        { name: 'Location', value: location || '—', inline: true },
        { name: 'Company / Role', value: company || '—', inline: true },
        { name: 'Experience', value: experience || '—', inline: true },
        { name: 'Investment Range', value: investmentRange || '—', inline: true },
        { name: 'Referred By', value: referral || '—', inline: true },
        { name: 'Message', value: message || '—', inline: false },
        { name: 'Submitted', value: new Date().toUTCString(), inline: false }
      ],
      footer: { text: 'LandNow Applications' }
    }]
  };

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(embed)
    });
  } catch (err) {
    console.error('Discord webhook failed:', err);
  }

  res.json({ success: true });
};
