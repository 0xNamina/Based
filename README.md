# Based 🔵

Auto-deployment tool untuk menyelesaikan semua tugas Base Learn di Guild.xyz dan mendapatkan role Discord secara otomatis.

## 🎯 What is This?

Based adalah automation tool yang membantu Anda:
- Auto complete semua quest di Base Learn Guild.xyz
- Mendapatkan Discord roles secara otomatis  
- Deploy smart contracts yang diperlukan untuk requirements
- Interact dengan Base network untuk memenuhi criteria

## 🚀 Quick Start

1. **Clone & Install**
```bash
git clone https://github.com/0xNamina/Based.git
cd Based
npm install
```

2. **Setup Environment**
```bash
cp .env.example .env.local
```
Edit `.env.local` dan tambahkan:
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
```

3. **Run**
```bash
npm run dev
```

## 🔧 Configuration

### WalletConnect Setup
- Get Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com/)
- Uncomment dan isi `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` di env file

### Guild.xyz Integration  
- Connect your wallet yang sudah join Guild.xyz
- Pastikan sudah join Base Learn Guild
- Run automation untuk complete requirements

## 📋 Base Learn Automation

Tool ini akan otomatis:
- ✅ Deploy required smart contracts
- ✅ Complete onchain transactions  
- ✅ Interact dengan Base protocols
- ✅ Submit proofs ke Guild.xyz
- ✅ Claim Discord roles

## 🌐 Deployment

Deploy to Vercel:
```bash
vercel --prod
```

Set environment variables di Vercel dashboard.

## 🏗️ Tech Stack

- Next.js + TypeScript
- WalletConnect v2
- Base network integration
- Guild.xyz API

## 🤝 Contributing

1. Fork repository
2. Create feature branch  
3. Commit changes dengan format: `feat: description`
4. Push dan create PR

## 🎯 WCT Builder Rewards

Repository ini eligible untuk WalletConnect Builder Rewards:
- WalletConnect integration ✅
- Base network focused ✅  
- Active development ✅

Setup:
- Create [Talent Protocol](https://app.talentprotocol.com/) profile
- Register [Basename](https://base.org/names)
- Track progress di [builderscore.xyz](https://builderscore.xyz/)

## 📄 License

MIT License

---

**Auto-complete your Base journey! 🔵**
