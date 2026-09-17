
/**
 * Nivel 4: Logística E-commerce - Automatización y Bucles
 * Desarrollado para la plataforma Python Quest
 */
LEVEL_CONTENT[4] = {
    title: "Logística E-commerce: Control de Inventario y Envíos",
    description: "Automatizarás el procesamiento de pedidos, control de stock y cálculo de tarifas de envío mediante bucles y control de flujo.",
    challenges: [
        { 
            id: "L4-01", 
            type: "lesson", 
            label: "DESCUBRE", 
            icon: "📦", 
            title: "Procesamiento Masivo de Órdenes", 
            content: `
                <p>En plataformas e-commerce, los pedidos se procesan de forma secuencial iterando sobre listas de paquetes.</p>
                <div class="concept-grid">
                    <div class="concept-item"><strong>for item in list</strong><span>Recorrido elemento a elemento</span></div>
                    <div class="concept-item"><strong>break</strong><span>Interrupción inmediata del ciclo</span></div>
                    <div class="concept-item"><strong>continue</strong><span>Saltar a la siguiente iteración</span></div>
                    <div class="concept-item"><strong>range()</strong><span>Generador de secuencias numéricas</span></div>
                </div>
                <pre class="code-block"><code>pedidos = [105, 0, 310, 450]

for monto in pedidos:
    if monto == 0:
        print("⚠️ Pedido inválido, omitiendo...")
        continue
    print(f"✅ Procesando pago de: \${monto}")</code></pre>
                <div class="tip-box">💡 La instrucción <code>continue</code> es ideal para ignorar datos corruptos sin detener todo el proceso de envíos.</div>
            ` 
        },
        { 
            id: "L4-02", 
            type: "choice", 
            label: "OBSERVA", 
            icon: "🔎", 
            title: "Interrupción de Procesos Críticos", 
            question: "Estás verificando el peso de los paquetes en una banda transportadora. Si encuentras un paquete con peso negativo (error de sensor), ¿qué instrucción detiene el ciclo de inmediato?", 
            options: [
                "stop", 
                "break", 
                "exit()", 
                "continue"
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "¡Correcto! 'break' rompe la ejecución del bucle for/while al instante.", 
            incorrectFeedback: "Recuerda la palabra reservada en Python para salir prematuramente de un bucle." 
        },
        { 
            id: "L4-03", 
            type: "choice", 
            label: "RESUELVE", 
            icon: "⚙️", 
            title: "Omisión de Productos sin Stock", 
            question: "Quieres iterar una lista de productos y saltarte únicamente aquellos que tengan stock 0 sin romper el bucle general. ¿Qué sentencia debes usar?", 
            options: [
                "continue", 
                "pass", 
                "skip", 
                "break"
            ], 
            correct: 0, 
            xp: 10, 
            correctFeedback: "¡Exacto! 'continue' salta la iteración actual y pasa inmediatamente al siguiente producto.", 
            incorrectFeedback: "'pass' no salta a la siguiente iteración, solo actúa como un marcador de posición vacío." 
        },
        { 
            id: "L4-04", 
            type: "choice", 
            label: "PREDICE", 
            icon: "📊", 
            title: "Generación de Códigos de Seguimiento", 
            question: "¿Cuántas iteraciones ejecutará el bucle 'for i in range(1, 5):' para generar etiquetas de envío?", 
            options: [
                "5 iteraciones (1, 2, 3, 4, 5)", 
                "4 iteraciones (1, 2, 3, 4)", 
                "3 iteraciones (2, 3, 4)", 
                "Sin fin (bucle infinito)"
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "Muy bien. range(start, stop) excluye el límite superior, por lo que genera [1, 2, 3, 4].", 
            incorrectFeedback: "Ten en cuenta que en Python el parámetro de parada del range() nunca se incluye." 
        },
        { 
            id: "L4-05", 
            type: "choice", 
            label: "DEPURA", 
            icon: "🛠️", 
            title: "Acumulador de Descuentos", 
            question: "Tienes total = 0 y una lista de compras compras = [10, 20, 30]. ¿Cuál es la forma pythónica de sumar cada compra al total dentro de un bucle?", 
            options: [
                "total = total + compras", 
                "total += c", 
                "total.append(c)", 
                "total =+ c"
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "¡Correcto! El operador += incrementa el acumulador total con el valor de la variable de control.", 
            incorrectFeedback: "Presta atención a la posición de los operadores (+ y =); `=+` no es un operador válido de acumulación." 
        },
        { 
            id: "L4-06", 
            type: "choice", 
            label: "DEMUESTRA", 
            icon: "🏆", 
            title: "Evaluación de Algoritmo de Inventarios", 
            question: "¿Qué valor imprimirá la variable 'conteo' tras ejecutar: conteo = 0; for x in [True, False, True]: if x: conteo += 1?", 
            options: [
                "0", 
                "1", 
                "2", 
                "3"
            ], 
            correct: 2, 
            xp: 20, 
            correctFeedback: "¡Felicitaciones! El bucle incrementó la variable solo cuando x fue evaluado como True (2 veces).", 
            incorrectFeedback: "Cuenta cuántos elementos dentro de la lista cumplen con la condición booleana 'True'." 
        }
    ]
};
