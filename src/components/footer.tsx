export default function Footer() {
    return (
        <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-8 bg-white dark:bg-zinc-950 transition-colors">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-400">
                    &copy; {new Date().getFullYear()} Mon Wachirarwit. All rights reserved.
                </p>
                <div className="flex gap-6 text-xs text-zinc-400">
                    <a href="#" className="hover:text-zinc-600 dark:hover:text-zinc-200">Back to Top</a>
                    <span>&middot;</span>
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400">Logistics & Tech</span>
                </div>
            </div>
        </footer>
    );
}

