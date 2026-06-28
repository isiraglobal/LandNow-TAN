module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body || {};

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
      title: 'New LandNow Entry',
      color: 0xb5925a,
      fields: [
        { name: 'Name', value: name, inline: true },
        { name: 'Email', value: email, inline: true },
        { name: 'Submitted', value: new Date().toUTCString(), inline: false }
      ],
      footer: { text: 'LandNow Entry Form' }
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
