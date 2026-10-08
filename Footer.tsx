export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div><div className="text-xl font-black">Store <span className="text-cyan-400">Game</span></div><p className="mt-3 text-sm text-slate-400">Ton univers gaming, au même endroit.</p></div>
        <div><h3 className="font-semibold">Boutique</h3><p className="mt-3 text-sm text-slate-400">Jeux · Cartes cadeaux · Crédits · Logiciels</p></div>
        <div><h3 className="font-semibold">Support</h3><p className="mt-3 text-sm text-slate-400">Contact · Commandes · Paiement sécurisé</p></div>
      </div>
      <div className="border-t border-slate-900 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Store Game</div>
    </footer>
  );
}
