import { Carrinho } from "./Carrinho";
import { IVenda } from "./IVenda";
import { Venda } from "./Venda";

export class VendaCredito extends Venda implements IVenda {
    readonly desconto: number

    constructor(carrinho: Carrinho) {
        super(carrinho)
        this.desconto = 0.05
    }

    aplicarDesconto(): void {
        if (this.total / 100 > 100) {
            this.total = this.total - (this.total * this.desconto)
        }
    }

    finalizarPedido(): string {
        return `Pedido Finalizado. Total ${((this.total / 100).toFixed(2)).replace('.', ',')}`
    }
}