"use client";

import { useRouter } from "next/navigation";
import { loginUser } from "../../../components/api/auth/fetchAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useAuthContext } from "@/context/authContex";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email requerido"),
    password: yup
        .string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Contraseña requerida"),
});

export default function LoginForm() {
    const router = useRouter();
    const [mensaje, setMensaje] = React.useState("");
    const [error, setError] = React.useState("");
    const { saveUserData } = useAuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: { email: string; password: string }) => {
        setMensaje("");
        setError("");

        try {
            const userData = await loginUser(data.email, data.password);
            localStorage.setItem("token", userData.token);
            localStorage.setItem("user", JSON.stringify(userData.user));
            localStorage.setItem("isAuth", JSON.stringify(true));
            saveUserData({
                user: userData.user,
                token: userData.token,
                login: true,
            });

            toast.success("¡Login exitoso!");
            router.push("/Home");
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message || "Error al iniciar sesión");
            } else {
                toast.error("Error desconocido al iniciar sesión");
            }
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
            easing: "ease-out",
        });
    }, []);

    return (
        <div
            className="relative bg-white p-8 rounded-2xl shadow-lg w-[60vh] mt-12"
            data-aos="fade-down"
        >
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={40}
                height={40}
                className="absolute top-[-10px] left-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={25}
                height={25}
                className="absolute top-[-10px] right-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={20}
                height={20}
                className="absolute bottom-[-10px] left-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={40}
                height={40}
                className="absolute bottom-[-10px] right-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={25}
                height={25}
                className="absolute bottom-[40vh] right-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={25}
                height={25}
                className="absolute bottom-[20vh] left-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={25}
                height={25}
                className="absolute bottom-[40vh] left-[-10px] animate-pulse"
            />
            <Image
                src="/assets/img/estrella.png"
                alt="Estrella decorativa"
                width={30}
                height={20}
                className="absolute bottom-[15vh] right-[-10px] animate-pulse"
            />

            <div className="bg-white p-8 rounded-2xl w-full max-w-sm">
                <div className="absolute -top-10 left-1/2 transform ml-20">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                        <Image
                            src="/assets/img/pet9.png"
                            alt="Avatar de usuario"
                            width={190}
                            height={100}
                            className="object-contain"
                        />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">
                    Iniciar sesión
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            {...register("password")}
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-1"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-sky-500 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Iniciar sesión
                    </button>
                </form>

                {mensaje && (
                    <p className="mt-4 text-center text-sm text-green-600 font-medium">
                        {mensaje}
                    </p>
                )}
                {error && (
                    <p className="mt-4 text-center text-sm text-red-500 font-medium">
                        {error}
                    </p>
                )}

                <p className="text-sm text-center text-gray-600 mt-10">
                    ¿No tenés cuenta?{" "}
                    <a
                        href="/register"
                        className="text-purple-600 hover:underline"
                    >
                        ¡Registrate!
                    </a>
                </p>
            </div>
        </div>
    );
}
