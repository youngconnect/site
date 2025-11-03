export default function TrustedCompaniesComponent() {
    return (
        <article className="w-full bg-gray-800">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-14">
                    {
                        Array.from({ length: 6 })
                        .map(_ => (
                            <span className="">Delcio Capolo</span>
                        ))
                    }
                </div>
            </div>
        </article>
    );
}
