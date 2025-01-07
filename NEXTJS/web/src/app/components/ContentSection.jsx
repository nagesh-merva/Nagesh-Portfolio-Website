"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ContentSection({ title, description, imageSide }) {
    return (
        <motion.div
            className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {imageSide === "left" && (
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-50 rounded-2xl shadow-lg" />
                </motion.div>
            )}

            <motion.div
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, x: imageSide === "left" ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>

            {imageSide === "right" && (
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-50 rounded-2xl shadow-lg" />
                </motion.div>
            )}
        </motion.div>
    );
}