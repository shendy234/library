import { useForm, usePage, Link } from "@inertiajs/react";
import Image from "../../components/Image";
import AuthLayout from "../../Layouts/AuthLayout";

const LoginAdmin = () => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        identifier: "",
        password: "",
        role: "admin", // default role admin
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login-admin");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#F9F9F9] relative overflow-hidden">
            {/* Dekorasi */}
            <div className="absolute w-[700px] h-[700px] bg-blue-100 rounded-full top-[-450px] right-[180px] opacity-50 z-0" />
            <div className="absolute w-[780px] h-[780px] bg-blue-100 rounded-full bottom-[-100px] left-[-320px] opacity-50 z-0" />
            <div className="absolute w-[700px] h-[700px] bg-blue-100 rounded-full bottom-[-430px] right-[-200px] opacity-50 z-0" />

            {/* KIRI */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-8 relative z-10">
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/logo.png"
                        alt="SMAN 2 BANDUNG"
                        w={100}
                        h={100}
                    />
                    <h1 className="text-2xl md:text-3xl font-bold text-[#1E1B4B] text-left leading-tight">
                        SMAN 2 Bandung <br /> E-Library
                    </h1>
                </div>
            </div>

            {/* KANAN */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-12 z-10">
                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">
                        Login Admin
                    </h1>

                    {flash.success && (
                        <div className="mb-4 p-3 rounded bg-green-100 text-green-800 border border-green-300 text-sm">
                            {flash.success}
                        </div>
                    )}

                    {errors.message && (
                        <p className="text-red-500 text-sm mb-4">
                            {errors.message}
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Username */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-1">
                                Username / Email
                            </label>
                            <input
                                type="text"
                                name="identifier"
                                value={data.identifier}
                                onChange={(e) =>
                                    setData("identifier", e.target.value)
                                }
                                placeholder="Masukkan username atau email"
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-700 text-sm mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <div className="mt-1 text-right text-sm">
                                <Link
                                    href="/forgot-password"
                                    className="text-blue-600 hover:underline"
                                >
                                    Lupa password?
                                </Link>
                            </div>
                        </div>

                        {/* Tombol Login */}
                        <button
                            type="submit"
                            className="w-full bg-[#1E1B4B] text-white py-2 rounded hover:bg-[#312E81] transition"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Login"}
                        </button>

                        {/* Tombol Registrasi (opsional) */}
                        <div className="pt-4 text-sm text-center">
                            <span className="text-gray-700">
                                Belum punya akun?{" "}
                            </span>
                            <Link
                                href="/register"
                                className="text-blue-700 font-semibold hover:underline"
                            >
                                Daftar di sini
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

LoginAdmin.layout = (page) => <AuthLayout>{page}</AuthLayout>;

export default LoginAdmin;
