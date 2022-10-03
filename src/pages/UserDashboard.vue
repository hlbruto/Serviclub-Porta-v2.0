<template>
  <q-page class="q-pa-sm">
    <div>
      <small class="q-mt-sm q-mr-sm row justify-end text-grey-7">
        {{ formattedString }}
      </small>
    </div>

    <q-card class="q-mt-sm">
      <q-card-section class="text-h6 q-pb-none">
        <q-item class="row">
          <q-item-section avatar class="col-md-1 col-lg-1">
            <q-icon color="blue" name="mdi-cart" size="44px"/>
          </q-item-section>

          <q-item-section class="col-md-8 col-lg-8">
            <q-item-label>
              <div class="text-h6">Mis Pedidos</div>
            </q-item-label>
            <q-item-label caption class="text-black" v-if="$q.platform.is.desktop">
              Monitoree los servicios que ud. ha solicitado. Observe su estado aquí.
            </q-item-label>
          </q-item-section>

          <q-item-section avatar class="col-md-3 col-lg-3">
            <q-item-label>
              <div class="text-body1">Saldo de su cuenta JC:</div>
            </q-item-label>
            <q-item-label class="text-bold text-primary">$1000.00</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section class="q-pa-none q-ma-none">
        <q-table class="no-shadow no-border" :rows="storePedidos.pedidos" :columns="salesColumn" hide-bottom>
          <template v-slot:body-cell-Name="props">
            <q-td :props="props">
              <q-item>
                <q-item-section>
                  <q-item-label>Sin asignar</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Servicio="props">
            <q-td :props="props">
              <q-item>
                <q-item-section>
                  <q-item-label>
                    {{ props.row.attributes.servicio.data.attributes.servicio }}
                  </q-item-label>
                  <q-item-label caption>Fecha pedido: <br/>
                    {{ props.row.attributes.createdAt }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Precio="props">
            <q-td :props="props">
              <q-item>
                <q-item-section>
                  <q-item-label>{{ props.row.attributes.servicio.data.attributes.precio }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Progress="props">
            <q-td :props="props">
              <q-item>
                <q-item-section>
                  <q-item-label caption class="">
                    <q-linear-progress dark :color="getColor(props.row.attributes.progress)" :value="props.row.attributes.progress / 100"/>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-Status="props">
            <q-td :props="props" class="text-left">
              <q-chip class="text-white text-capitalize" :label="props.row.attributes.estado"
                      :color="getChipColor(props.row.attributes.estado)"></q-chip>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <!-- place QPageScroller at end of page -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="black" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { date, useQuasar } from 'quasar'
import { usePedidosStore } from 'stores/pedidos-store'
import { useUsuariosStore } from 'stores/usuarios-store'

const timeStamp = Date.now()
const formattedString = date.formatDate(timeStamp, 'YYYY-MM-DD | HH:mm')

const $q = useQuasar()
const storePedidos = usePedidosStore()
const storeUsuarios = useUsuariosStore()

/* const salesData = [
  {
    name: 'Henry Luis Pérez Vázquez',
    Progress: 70,
    status: 'Cancelado',
    date: '23 Oct 2018',
    servicio: 'Asistencia Informática',
    total: '$300,00'
  },
  {
    name: 'Henry Luis Pérez Vázquez',
    Progress: 100,
    status: 'Completado',
    date: '11 Nov 2018',
    servicio: 'Tiempo de máquina',
    total: '$30,00'
  },
  {
    name: 'Henry Luis Pérez Vázquez',
    Progress: 30,
    status: 'En Progreso',
    servicio: 'Impresión de documentos',
    total: '$34,00',
    date: '19 Sept 2020'
  },
  {
    name: 'Henry Luis Pérez Vázquez',
    Progress: 0,
    status: 'Pendiente de pago',
    servicio: 'Búsqueda de información digital',
    total: '$50,00',
    date: '19 Sept 2020'
  }
] */
const salesColumn = [
  {
    name: 'Name',
    label: 'Instructor asignado',
    field: 'name',
    sortable: true,
    align: 'left'
  },
  { name: 'Servicio', label: 'Servicio', field: 'servicio', sortable: true, align: 'left' },
  {
    name: 'Precio',
    label: 'Precio',
    field: 'precio',
    sortable: true,
    align: 'left',
    classes: 'text-bold'
  },
  {
    name: 'Progress',
    label: 'Progreso',
    field: 'progress',
    sortable: true,
    align: 'left',
    classes: 'text-bold'
  },
  {
    name: 'Status',
    label: 'Estado',
    field: 'status',
    sortable: true,
    align: 'left',
    classes: 'text-bold'
  }
]

onBeforeMount(() => {
  storeUsuarios.authorization = $q.localStorage.getItem('authorization')
  storeUsuarios.user = $q.localStorage.getItem('user')
  storeUsuarios.logueado = true
  storePedidos.listarPedidos()
})

function getColor (val) {
  if (val > 70 && val <= 100) {
    return 'green'
  } else if (val > 50 && val <= 70) {
    return 'blue'
  }
  return 'red'
}

function getChipColor (status) {
  if (status === 'Cancelado') {
    return 'negative'
  } else if (status === 'Completado') {
    return 'positive'
  } else if (status === 'En Progreso') {
    return 'warning'
  } else if (status === 'Pendiente de pago') {
    return 'dark'
  } else {
    return 'info'
  }
}
</script>

<style scoped></style>
