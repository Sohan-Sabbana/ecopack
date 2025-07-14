import React, { useState, useEffect } from 'react';
import {
    Package,
    BarChart3,
    ShoppingCart,
    User,
    Settings,
    Download,
    Check,
    Gift,
    Clock,
    TrendingUp,
    Box,
    Leaf,
    Users,
    Sparkles,
    Recycle,
    Zap
} from 'lucide-react';

const EcoPackOptimizer = () => {
    const [currentRole, setCurrentRole] = useState(null);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [isLoading, setIsLoading] = useState(false);

    // Animated background particles
    const AnimatedBackground = () => (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 bg-green-200 rounded-full opacity-20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
            ))}
        </div>
    );

    // 3D Box Animation Component
    const AnimatedBox = ({ size = 'medium', rotating = false, className = '' }) => {
        const sizes = {
            small: 'w-8 h-8',
            medium: 'w-12 h-12',
            large: 'w-16 h-16'
        };

        return (
            <div className={`${sizes[size]} ${className} relative`}>
                <div
                    className={`w-full h-full bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 ${rotating ? 'animate-spin' : 'animate-pulse'}`}
                    style={{
                        transform: 'rotateX(15deg) rotateY(15deg)',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-lg opacity-50 transform translate-x-1 translate-y-1" />
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-lg opacity-30 transform translate-x-2 translate-y-2" />
                </div>
            </div>
        );
    };

    // Floating Card Component
    const FloatingCard = ({ children, delay = 0 }) => (
        <div
            className="transform transition-all duration-700 hover:scale-105 hover:shadow-2xl"
            style={{
                animation: `fadeInUp 0.8s ease-out ${delay}s both, float 3s ease-in-out infinite ${delay}s`
            }}
        >
            {children}
        </div>
    );

    // Dummy data
    const dummyOrders = [
        {
            id: 'ORD-001',
            customer: 'John Doe',
            items: [
                { name: 'Laptop', weight: 2.5, dimensions: '35x25x3' },
                { name: 'Mouse', weight: 0.1, dimensions: '10x6x4' }
            ],
            suggestedBox: { width: 40, height: 30, depth: 8, type: 'Medium' },
            voidSpace: 15,
            status: 'pending',
            ecoScore: 85
        },
        {
            id: 'ORD-002',
            customer: 'Jane Smith',
            items: [
                { name: 'Books (3)', weight: 1.2, dimensions: '20x15x5' },
                { name: 'Pen Set', weight: 0.2, dimensions: '15x3x2' }
            ],
            suggestedBox: { width: 25, height: 20, depth: 8, type: 'Small' },
            voidSpace: 8,
            status: 'pending',
            ecoScore: 92
        },
        {
            id: 'ORD-003',
            customer: 'Bob Wilson',
            items: [
                { name: 'Monitor', weight: 5.2, dimensions: '60x40x15' }
            ],
            suggestedBox: { width: 65, height: 45, depth: 20, type: 'Large' },
            voidSpace: 22,
            status: 'completed',
            ecoScore: 78
        }
    ];

    const analyticsData = {
        avgVoidSpace: 18.5,
        co2Saved: 2340,
        boxUsage: {
            Small: 45,
            Medium: 35,
            Large: 20
        },
        suggestedBoxes: [
            { dimensions: '22x18x6', reason: 'High frequency of small electronics orders' },
            { dimensions: '45x35x12', reason: 'Common monitor + accessories combo' }
        ],
        discontinueBoxes: [
            { type: 'Extra Large', reason: 'Low usage (2%), replace with custom sizing' }
        ]
    };

    const customerData = {
        greenPoints: 1250,
        redeemableItems: [
            { name: 'Organic Apples', points: 150, expiry: '2 days', image: '🍎' },
            { name: 'Whole Grain Bread', points: 100, expiry: '1 day', image: '🍞' },
            { name: 'Greek Yogurt', points: 80, expiry: '3 days', image: '🥛' }
        ]
    };

    const handleRoleSelect = (role) => {
        setIsLoading(true);
        setTimeout(() => {
            setCurrentRole(role);
            setIsLoading(false);
        }, 1000);
    };

    const LoginPage = () => (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center p-4 relative overflow-hidden">
            <AnimatedBackground />

            {/* Animated geometric shapes */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-20 animate-pulse" />
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-full opacity-20 animate-bounce" />

            <FloatingCard>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
                    <div className="text-center mb-8">
                        <div className="relative mx-auto mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
                                <Package className="w-10 h-10 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                                <Sparkles className="w-3 h-3 text-yellow-800" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                            Eco Pack Optimizer
                        </h1>
                        <p className="text-gray-600 font-medium">Smart • Sustainable • Efficient</p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Select Your Role</h2>

                        <button
                            onClick={() => handleRoleSelect('worker')}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-2 border-blue-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <div className="flex items-center justify-center space-x-4">
                                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                                    <Package className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-left">
                                    <span className="text-blue-700 font-semibold text-lg">Worker</span>
                                    <p className="text-blue-600 text-sm">Package orders efficiently</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </button>

                        <button
                            onClick={() => handleRoleSelect('manager')}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border-2 border-purple-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <div className="flex items-center justify-center space-x-4">
                                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                                    <BarChart3 className="w-6 h-6 text-purple-600" />
                                </div>
                                <div className="text-left">
                                    <span className="text-purple-700 font-semibold text-lg">Manager</span>
                                    <p className="text-purple-600 text-sm">Analyze & optimize</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </button>

                        <button
                            onClick={() => handleRoleSelect('customer')}
                            className="w-full group relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 border-2 border-green-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <div className="flex items-center justify-center space-x-4">
                                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                                    <ShoppingCart className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="text-left">
                                    <span className="text-green-700 font-semibold text-lg">Customer</span>
                                    <p className="text-green-600 text-sm">Earn eco-rewards</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </button>
                    </div>
                </div>
            </FloatingCard>

            {isLoading && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-8 text-center">
                        <AnimatedBox size="large" rotating className="mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Loading...</p>
                    </div>
                </div>
            )}
        </div>
    );

    const Sidebar = () => {
        const getNavItems = () => {
            switch (currentRole) {
                case 'worker':
                    return [
                        { id: 'dashboard', label: 'Orders', icon: Package },
                        { id: 'profile', label: 'Profile', icon: User }
                    ];
                case 'manager':
                    return [
                        { id: 'dashboard', label: 'Analytics', icon: BarChart3 },
                        { id: 'boxes', label: 'Box Management', icon: Box },
                        { id: 'reports', label: 'Reports', icon: Download }
                    ];
                case 'customer':
                    return [
                        { id: 'dashboard', label: 'GreenPoints', icon: Leaf },
                        { id: 'marketplace', label: 'Marketplace', icon: ShoppingCart }
                    ];
                default:
                    return [];
            }
        };

        const navItems = getNavItems();

        return (
            <div className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20" />

                <div className="relative p-6 border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                        <AnimatedBox size="medium" className="flex-shrink-0" />
                        <div>
                            <h1 className="text-xl font-bold text-white">Eco Pack Optimizer</h1>
                            <p className="text-sm text-gray-300 capitalize flex items-center space-x-1">
                                <span>{currentRole}</span>
                                <Sparkles className="w-3 h-3 text-yellow-400" />
                            </p>
                        </div>
                    </div>
                </div>

                <nav className="mt-8 relative">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => setCurrentPage(item.id)}
                            className={`w-full flex items-center space-x-3 px-6 py-4 text-left transition-all duration-300 group ${currentPage === item.id
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg transform scale-105'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white hover:translate-x-2'
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <item.icon className={`w-5 h-5 transition-transform duration-300 ${currentPage === item.id ? 'scale-110' : 'group-hover:scale-110'
                                }`} />
                            <span className="font-medium">{item.label}</span>
                            {currentPage === item.id && (
                                <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                    <button
                        onClick={() => setCurrentRole(null)}
                        className="w-full text-gray-400 hover:text-white text-sm bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500"
                    >
                        Switch Role
                    </button>
                </div>
            </div>
        );
    };

    const WorkerDashboard = () => (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Order Queue</h1>
                <p className="text-gray-600 flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    <span>AI-powered packaging optimization</span>
                </p>
            </div>

            <div className="grid gap-6">
                {dummyOrders.map((order, index) => (
                    <FloatingCard key={order.id} delay={index * 0.2}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-1">{order.id}</h3>
                                    <p className="text-gray-600">Customer: {order.customer}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="text-right">
                                        <div className="text-sm text-gray-500">Eco Score</div>
                                        <div className="text-lg font-bold text-green-600">{order.ecoScore}/100</div>
                                    </div>
                                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${order.status === 'completed'
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {order.status}
                                    </span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-4 flex items-center space-x-2">
                                        <Package className="w-5 h-5 text-blue-500" />
                                        <span>Items</span>
                                    </h4>
                                    <div className="space-y-3">
                                        {order.items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                                <span className="font-medium">{item.name}</span>
                                                <span className="text-gray-500 text-sm">{item.weight}kg • {item.dimensions}cm</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-700 mb-4 flex items-center space-x-2">
                                        <Sparkles className="w-5 h-5 text-purple-500" />
                                        <span>AI Suggested Box</span>
                                    </h4>
                                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-2 border-emerald-200">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <AnimatedBox size="small" />
                                            <span className="font-semibold text-emerald-800">{order.suggestedBox.type} Box</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-3">
                                            {order.suggestedBox.width} × {order.suggestedBox.height} × {order.suggestedBox.depth} cm
                                        </p>
                                        <div className="flex items-center space-x-3 mb-4">
                                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out"
                                                    style={{ width: `${100 - order.voidSpace}%` }}
                                                />
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">{order.voidSpace}% void</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200">
                                        <p className="text-sm text-gray-600 mb-3 flex items-center space-x-2">
                                            <Box className="w-4 h-4" />
                                            <span>3D Preview:</span>
                                        </p>
                                        <div className="w-full h-24 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-xl border-2 border-dashed border-blue-400 flex items-center justify-center group hover:from-blue-300 hover:to-indigo-400 transition-all duration-300">
                                            <div className="text-center">
                                                <AnimatedBox size="small" className="mx-auto mb-2 group-hover:scale-110" />
                                                <span className="text-blue-700 text-sm font-medium">Interactive 3D Model</span>
                                            </div>
                                        </div>
                                    </div>

                                    {order.status === 'pending' && (
                                        <button className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-3 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                            <Check className="w-5 h-5" />
                                            <span className="font-medium">Confirm Packaging</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </FloatingCard>
                ))}
            </div>
        </div>
    );

    const ManagerDashboard = () => (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600 flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <span>Real-time sustainability metrics</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <FloatingCard delay={0}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-6 border-2 border-blue-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 bg-blue-500 rounded-xl">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Avg Void Space</h3>
                        </div>
                        <p className="text-4xl font-bold text-blue-600 mb-2">{analyticsData.avgVoidSpace}%</p>
                        <p className="text-sm text-green-600 font-medium">↓ 2.3% from last week</p>
                    </div>
                </FloatingCard>

                <FloatingCard delay={0.2}>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl shadow-lg p-6 border-2 border-emerald-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 bg-emerald-500 rounded-xl">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">CO₂ Saved</h3>
                        </div>
                        <p className="text-4xl font-bold text-emerald-600 mb-2">{analyticsData.co2Saved}kg</p>
                        <p className="text-sm text-green-600 font-medium">↑ 5.1% from last month</p>
                    </div>
                </FloatingCard>

                <FloatingCard delay={0.4}>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl shadow-lg p-6 border-2 border-purple-200">
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="p-3 bg-purple-500 rounded-xl">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-800">Orders Today</h3>
                        </div>
                        <p className="text-4xl font-bold text-purple-600 mb-2">156</p>
                        <p className="text-sm text-green-600 font-medium">↑ 12% from yesterday</p>
                    </div>
                </FloatingCard>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <FloatingCard delay={0.6}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                            <BarChart3 className="w-6 h-6 text-indigo-500" />
                            <span>Box Usage Distribution</span>
                        </h3>
                        <div className="space-y-4">
                            {Object.entries(analyticsData.boxUsage).map(([type, percentage]) => (
                                <div key={type} className="flex items-center space-x-4">
                                    <span className="w-16 text-sm font-medium text-gray-700">{type}</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                                        <div
                                            className="bg-gradient-to-r from-indigo-400 to-purple-500 h-4 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-bold text-gray-800">{percentage}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </FloatingCard>

                <FloatingCard delay={0.8}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                            <TrendingUp className="w-6 h-6 text-green-500" />
                            <span>Performance Trends</span>
                        </h3>
                        <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-xl flex items-center justify-center border-2 border-dashed border-green-400 group hover:from-green-200 hover:to-emerald-300 transition-all duration-300">
                            <div className="text-center">
                                <BarChart3 className="w-12 h-12 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-green-700 font-semibold">Interactive Analytics</span>
                            </div>
                        </div>
                    </div>
                </FloatingCard>
            </div>
        </div>
    );

    const BoxManagement = () => (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Box Size Management</h1>
                <p className="text-gray-600 flex items-center space-x-2">
                    <Box className="w-5 h-5 text-orange-500" />
                    <span>AI-driven optimization recommendations</span>
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <FloatingCard>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                            <Sparkles className="w-6 h-6 text-green-500" />
                            <span>Suggested New Boxes</span>
                        </h3>
                        <div className="space-y-4">
                            {analyticsData.suggestedBoxes.map((box, idx) => (
                                <div key={idx} className="border-2 border-green-200 rounded-xl p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <AnimatedBox size="small" />
                                        <span className="font-bold text-green-800">{box.dimensions} cm</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{box.reason}</p>
                                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                                        Add to Production
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </FloatingCard>

                <FloatingCard delay={0.2}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                            <Recycle className="w-6 h-6 text-red-500" />
                            <span>Optimization Recommendations</span>
                        </h3>
                        <div className="space-y-4">
                            {analyticsData.discontinueBoxes.map((box, idx) => (
                                <div key={idx} className="border-2 border-red-200 rounded-xl p-4 bg-gradient-to-br from-red-50 to-pink-50 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <AnimatedBox size="small" />
                                        <span className="font-bold text-red-800">{box.type}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4">{box.reason}</p>
                                    <button className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                                        Discontinue
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </FloatingCard>
            </div>

            <div className="mt-8">
                <FloatingCard delay={0.4}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                            <Box className="w-6 h-6 text-purple-500" />
                            <span>3D Box Efficiency Visualization</span>
                        </h3>
                        <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-xl flex items-center justify-center border-2 border-dashed border-purple-400 group hover:from-purple-200 hover:to-indigo-300 transition-all duration-300">
                            <div className="text-center">
                                <div className="flex space-x-4 mb-4">
                                    <AnimatedBox size="small" />
                                    <AnimatedBox size="medium" />
                                    <AnimatedBox size="large" />
                                </div>
                                <span className="text-purple-700 font-semibold">Interactive 3D Efficiency Model</span>
                            </div>
                        </div>
                    </div>
                </FloatingCard>
            </div>
        </div>
    );

    const CustomerDashboard = () => (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">GreenPoints Dashboard</h1>
                <p className="text-gray-600 flex items-center space-x-2">
                    <Leaf className="w-5 h-5 text-green-500" />
                    <span>Your sustainable shopping rewards</span>
                </p>
            </div>

            <FloatingCard>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl shadow-xl p-8 mb-6 border-2 border-green-200">
                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                                <Leaf className="w-12 h-12 text-white" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                                <Sparkles className="w-4 h-4 text-yellow-800" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl font-bold text-gray-800 mb-2">{customerData.greenPoints}</h2>
                            <p className="text-gray-600 text-lg">Total GreenPoints</p>
                            <div className="mt-2 flex items-center space-x-2">
                                <div className="w-32 bg-green-200 rounded-full h-2">
                                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full" style={{ width: '75%' }} />
                                </div>
                                <span className="text-sm text-gray-600">Level 4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FloatingCard>

            <FloatingCard delay={0.2}>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                        <Gift className="w-6 h-6 text-purple-500" />
                        <span>Redeem Points</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {customerData.redeemableItems.map((item, idx) => (
                            <div key={idx} className="border-2 border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-gray-50">
                                <div className="text-center mb-4">
                                    <div className="text-5xl mb-3 animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}>
                                        {item.image}
                                    </div>
                                    <h4 className="font-bold text-gray-800">{item.name}</h4>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-green-600 font-bold text-lg">{item.points} pts</span>
                                    <div className="flex items-center space-x-1 text-red-500">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">{item.expiry}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                                    Redeem Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </FloatingCard>
        </div>
    );

    const Reports = () => (
        <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Reports</h1>
                <p className="text-gray-600 flex items-center space-x-2">
                    <Download className="w-5 h-5 text-blue-500" />
                    <span>Download comprehensive analytics</span>
                </p>
            </div>

            <FloatingCard>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-6">
                        <button className="group flex items-center space-x-4 p-6 border-2 border-blue-200 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="p-3 bg-blue-500 rounded-xl group-hover:scale-110 transition-transform">
                                <Download className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-gray-800 text-lg">Monthly Analytics</h3>
                                <p className="text-sm text-gray-600">Packaging efficiency & sustainability metrics</p>
                            </div>
                        </button>
                        <button className="group flex items-center space-x-4 p-6 border-2 border-green-200 rounded-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 hover:shadow-lg hover:scale-105">
                            <div className="p-3 bg-green-500 rounded-xl group-hover:scale-110 transition-transform">
                                <Leaf className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-gray-800 text-lg">CO₂ Impact Report</h3>
                                <p className="text-sm text-gray-600">Environmental impact analysis</p>
                            </div>
                        </button>
                    </div>
                </div>
            </FloatingCard>
        </div>
    );

    const renderContent = () => {
        if (currentRole === 'worker') {
            return <WorkerDashboard />;
        } else if (currentRole === 'manager') {
            switch (currentPage) {
                case 'dashboard':
                    return <ManagerDashboard />;
                case 'boxes':
                    return <BoxManagement />;
                case 'reports':
                    return <Reports />;
                default:
                    return <ManagerDashboard />;
            }
        } else if (currentRole === 'customer') {
            return <CustomerDashboard />;
        }
    };

    if (!currentRole) {
        return <LoginPage />;
    }

    return (
        <div className="flex h-screen bg-gray-50 relative overflow-hidden">
            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

            <AnimatedBackground />
            <Sidebar />
            <div className="flex-1 overflow-auto relative">
                {renderContent()}
            </div>
        </div>
    );
};

export default EcoPackOptimizer;