export default function FaqPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Frequently Asked Questions
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                What is the purpose of this website?
                            </h3>
                            <p className="text-gray-600">
                                This website is a simple FAQs page, where you can find answers to some common questions about how to use the website.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                How do I create an account?
                            </h3>
                            <p className="text-gray-600">
                                To create an account, go to the login page and click on the *Create an account* button. Fill in the required information and click on the *Create account* button.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                How do I log in?
                            </h3>
                            <p className="text-gray-600">
                                To log in, go to the login page and enter your email and password. Click on the *Log in* button to log in.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                How long does shipping take?
                            </h3>
                            <p className="text-gray-600">
                                Shipping usually takes 3–5 business days within the country. International orders   may take longer depending on the destination. You will receive a tracking number once your order has been shipped.
                            </p>
                    </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}