"use client";

import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "../../../Components/api/Auth/fetchAuth";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const schema = yup.object().shape({
    name: yup.string().required("Nombre es requerido"),
    address: yup.string().required("Dirección es requerida"),
    phone: yup
        .string()
        .required("Teléfono es requerido")
        .matches(/^\d+$/, "El teléfono solo debe contener números"),
    email: yup.string().email("Email inválido").required("Email es requerido"),
    password: yup
        .string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("Contraseña es requerida"),
});

type FormData = yup.InferType<typeof schema>;

export default function RegisterForm() {
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setError(null);
        setRegistroExitoso(false);
        setLoading(true);
        try {
            await registerUser(data);
            toast.success("¡Registro exitoso!");
            reset();
            router.push("/login");
        } catch (err) {
            if (err instanceof Error) {
                toast.error(err.message || "Error al registrarse");
            } else {
                toast.error("Error desconocido al registrarse");
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
        <div className="bg-white p-8 rounded-2xl shadow-lg w-[65vh] mt-8"  data-aos="fade-down">
            <div className="relative bg-white p-4 rounded-2xl w-full">
                <div className="absolute -top-16 left-1/2 transform ml-28">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                        <Image
                            src="/assets/img/pet12.png"
                            alt="Avatar de usuario"
                            width={228}
                            height={128}
                            className="object-contain"
                        />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">
                    Registrarse
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-700">
                            Nombre
                        </label>
                        <input
                            type="text"
                            {...register("name")}
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                errors.name
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-purple-500"
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Dirección
                        </label>
                        <input
                            type="text"
                            {...register("address")}
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                errors.address
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-purple-500"
                            }`}
                        />
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            {...register("phone")}
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                errors.phone
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-purple-500"
                            }`}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email")}
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                errors.email
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-purple-500"
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            {...register("password")}
                            className={`mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                                errors.password
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-300 focus:ring-purple-500"
                            }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-sky-500 text-white font-semibold py-3 text-lg rounded-lg transition"
                        disabled={loading}
                    >
                        {loading ? "Registrando..." : "Registrarse"}
                    </button>
                </form>

                {registroExitoso && (
                    <p className="mt-5 text-center text-base text-green-600 font-medium">
                        ¡Registro exitoso!
                    </p>
                )}

                {error && (
                    <p className="mt-5 text-center text-base text-red-600 font-medium">
                        {error}
                    </p>
                )}

                <p className="text-center text-sm text-gray-600 mt-6">
                    ¿Ya tenés cuenta?{" "}
                    <a
                        href="/login"
                        className="text-purple-600 hover:underline"
                    >
                        Iniciá sesión
                    </a>
                </p>
            </div>
        </div>
    );
}
