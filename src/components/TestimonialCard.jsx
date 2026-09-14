function TestimonialCard({ texto, nome, papel}) {
    return (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex gap-1 text-[#a05a3f]">
                {Array(5).fill(0).map((_, index) => (
                    <span key={index}>★</span>
                ))}
            </div>

            <p className="mt-4 text-sm text-[#6b5347]">{texto}</p>
            <p className="mt-4 font-serif font-bold text-[#3d2418]">{nome}</p>
            <p className="text-xs text-[#a05a3f]">{papel}</p>
        </div>
    )
}

export default TestimonialCard
