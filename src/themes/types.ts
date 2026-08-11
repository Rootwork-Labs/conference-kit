/**
 * Theme metadata contract.
 *
 * Keep this deliberately small. Theme packages are extension points; grow this
 * interface when concrete needs emerge (for example during Redshifted design).
 * Do not put stylesheet paths here — each theme module side-effect-imports its CSS.
 */
export interface Theme {
	id: string;
	name: string;
	description: string;
}
