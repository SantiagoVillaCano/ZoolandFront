import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-t',
  imports: [],
  templateUrl: './formulario-t.component.html',
  styleUrls: ['./formulario-t.component.css']
})
export class FormularioTComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      fecha_ing: ['', Validators.required],
      fecha_comp: [{ value: '', disabled: true }],
      num_personas: [1, [Validators.required, Validators.min(1)]],
      valor_por_persona: [{ value: 27000, disabled: true }],
      valor_total: [{ value: 0, disabled: true }],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  calc() {
    const n = this.form.get('num_personas')?.value || 0;
    const total = 27000 * n;
    this.form.get('valor_total')?.setValue(total);
    this.form.get('fecha_comp')?.setValue(new Date().toISOString().split('T')[0]);
  }

  submit() {
    this.calc();
    console.log(this.form.getRawValue());
    alert('Venta confirmada\nCorreo enviado');

  }
}
