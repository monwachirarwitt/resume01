export default function Footer() {
    return (
        <footer className="border-t border-zinc-200/50 dark:border-zinc-800/50 py-8 bg-white dark:bg-zinc-950 transition-colors">
            <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-zinc-400">
                    &copy; {new Date().getFullYear()} Monwachirarwit. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

