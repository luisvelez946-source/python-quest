
/**
 * Nivel 3: Fintech TuCuenta - Limpieza de Datos y Diccionarios
 * Desarrollado para la plataforma Python Quest
 */
LEVEL_CONTENT[3] = {
    title: "Fintech TuCuenta: Detección de Fraude y Normalización",
    description: "Procesarás diccionarios de usuarios, limpiarás estructuras de datos atípicas y validarás transacciones financieras.",
    challenges: [
        { 
            id: "L3-01", 
            type: "lesson", 
            label: "DESCUBRE", 
            icon: "💳", 
            title: "Estructuras Clave-Valor en Transacciones", 
            content: `
                <p>En las pasarelas de pago, los datos del cliente se representan mediante diccionarios para un acceso rápido por clave.</p>
                <div class="concept-grid">
                    <div class="concept-item"><strong>dict { }</strong><span>Estructura de llaves y valores</span></div>
                    <div class="concept-item"><strong>.get()</strong><span>Acceso seguro a claves sin error</span></div>
                    <div class="concept-item"><strong>.items()</strong><span>Iteración de par llave-valor</span></div>
                    <div class="concept-item"><strong>set { }</strong><span>Eliminación de duplicados</span></div>
                </div>
                <pre class="code-block"><code>transaccion = {
    "usuario": "usr_99",
    "monto": 450.00,
    "score_riesgo": 0.12
}

if transaccion.get("score_riesgo", 0) > 0.8:
    print("🚨 Congelar cuenta: Alto riesgo")
else:
    print("✅ Transacción aprobada")</code></pre>
                <div class="tip-box">💡 El método .get() evita que la aplicación falle (KeyError) si una clave no existe en el registro.</div>
            ` 
        },
        { 
            id: "L3-02", 
            type: "choice", 
            label: "OBSERVA", 
            icon: "🔎", 
            title: "Búsqueda Eficiente por Llave", 
            question: "Dada la estructura cliente = {'id': 101, 'saldo': 5000}. ¿Cuál es la forma segura de consultar la propiedad 'tarjeta' evitando un fallo de ejecución si no existe?", 
            options: [
                "cliente['tarjeta']", 
                "cliente.get('tarjeta', 'No registrada')", 
                "cliente.find('tarjeta')", 
                "cliente.search('tarjeta')"
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "¡Correcto! .get() devuelve el valor por defecto 'No registrada' si la llave no existe en el diccionario.", 
            incorrectFeedback: "Acceder directamente con corchetes ['tarjeta'] arroja un KeyError si la clave no está presente." 
        },
        { 
            id: "L3-03", 
            type: "choice", 
            label: "RESUELVE", 
            icon: "⚙️", 
            title: "Depuración de Duplicados", 
            question: "Tienes una lista de IDs de transacciones duplicadas: ids = [401, 402, 401, 405, 402]. ¿Qué estructura de datos permite obtener los IDs únicos de inmediato?", 
            options: [
                "list(ids)", 
                "tuple(ids)", 
                "set(ids)", 
                "dict(ids)"
            ], 
            correct: 2, 
            xp: 10, 
            correctFeedback: "Excelente. Convertir la lista a conjunto con set() elimina automáticamente los elementos repetidos.", 
            incorrectFeedback: "Recuerda cuál colección en Python prohíbe por definición los elementos duplicados." 
        },
        { 
            id: "L3-04", 
            type: "choice", 
            label: "PREDICE", 
            icon: "📊", 
            title: "Iteración sobre Transacciones", 
            question: "Analiza el bucle: for k, v in cuenta.items():. ¿Qué representan las variables k y v en cada vuelta del ciclo?", 
            options: [
                "k es la posición (índice) y v es el valor.", 
                "k es la Clave (Key) y v es el Valor (Value).", 
                "k es la cantidad y v es la variable.", 
                "k es el resultado y v es la clave."
            ], 
            correct: 1, 
            xp: 10, 
            correctFeedback: "¡Exacto! El método .items() desempaqueta el diccionario devolviendo el par (Clave, Valor).", 
            incorrectFeedback: "Revisa el significado de las siglas 'k' y 'v' al iterar diccionarios en Python." 
        },
        { 
            id: "L3-05", 
            type: "choice", 
            label: "DEPURA", 
            icon: "🛠️", 
            title: "Modificación de Saldos", 
            question: "Quieres actualizar el saldo del cliente sumándole 150 a su valor actual. ¿Cuál es la sintaxis de actualización válida?", 
            options: [
                "cliente['saldo'] += 150", 
                "cliente.update_val('saldo', 150)", 
                "cliente.saldo =+ 150", 
                "add(cliente['saldo'], 150)"
            ], 
            correct: 0, 
            xp: 10, 
            correctFeedback: "Muy bien. El operador de asignación acumulativa += incrementa directamente el valor de la clave especificada.", 
            incorrectFeedback: "Debes acceder a la clave del diccionario mediante corchetes y utilizar el operador acumulativo adecuado." 
        },
        { 
            id: "L3-06", 
            type: "choice", 
            label: "DEMUESTRA", 
            icon: "🏆", 
            title: "Validación General de Diccionarios", 
            question: "¿Qué ocurre al ejecutar len(transaccion) sobre un diccionario con 4 pares clave-valor?", 
            options: [
                "Devuelve 8 (cuenta claves y valores por separado).", 
                "Devuelve 4 (cuenta el número total de llaves).", 
                "Arroja un error de tipo (TypeError).", 
                "Devuelve la suma numérica de los valores."
            ], 
            correct: 1, 
            xp: 20, 
            correctFeedback: "¡Nivel 3 Completado! La función len() mide la cantidad de pares clave-valor (llaves) presentes.", 
            incorrectFeedback: "La función len() cuenta los elementos de primer nivel, que en un diccionario corresponden al número de llaves." 
        }
    ]
};